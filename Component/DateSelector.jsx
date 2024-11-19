import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../store/dateSlice';

const DateSelector = () => {
  const dispatch = useDispatch();
  const today = new Date().toISOString().split('T')[0];
  const [showModal, setShowModal] = useState(false);
  const selectedDate = useSelector(state => state.date.selectedDate);

  const formatDate = dateString => {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  };

  const handleDateSelect = day => {
    dispatch(setDate(day.dateString));
    setShowModal(false);
  };

  return (
    <View style={{ marginTop: 5 }}>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={styles.calendarButton}
      >
        <Text style={styles.buttonText}>
          {selectedDate ? formatDate(selectedDate) : 'Select Date'}
        </Text>
        <Image
          source={require('../assets/calendar.png')}
          style={{ width: 25, height: 25, marginLeft: 8 }}
        />
      </TouchableOpacity>

      <Modal visible={showModal} transparent={true} animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
            <Calendar
              onDayPress={handleDateSelect}
              maxDate={today}
              markedDates={{
                [selectedDate]: { selected: true, selectedColor: '#6200EE' },
              }}
            />
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={styles.closeCalendarButton}
            >
              <Text style={styles.closeCalendarText}>Close Calendar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  calendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeText: {
    color: 'black',
    fontSize: 16,
  },
  closeCalendarButton: {
    marginTop: 10,
  },
  closeCalendarText: {
    color: 'blue',
    textAlign: 'center',
  },
});

export default DateSelector;

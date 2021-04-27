import React, {useState} from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import TermSelector from './TermSelector';
import CourseSelector from './CourseSelector';
import { getCourseTerm, terms } from '../utils/course.js';

const CourseList = ({courses}) => {
    const [selectedTerm, setSelectedTerm ] = useState('Winter');
    const selectedTerms = courses.filter(course => selectedTerm === getCourseTerm(course));
    return (
      <ScrollView>
        <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
        <CourseSelector courses={selectedTerms} />
      </ScrollView>
    );
  };


export default CourseList;   

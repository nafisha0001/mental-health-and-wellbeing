import PushUp from '../Images/MindfulMoment/push-up.png';
import Squate from '../Images/MindfulMoment/Squat.png';
import Plank from '../Images/MindfulMoment/plank.png';
import Lunges from '../Images/MindfulMoment/Lunges.png';
import Bicycle from '../Images/MindfulMoment/Bicycle.png';
import Mountain from '../Images/MindfulMoment/mountain.png';

const ExerciseData = [
  {
    image: PushUp, 
    heading: "Push-Up",
    Meaning: 'Push-Up',
    Level: 'Intermediate',
    Type: 'Upper Body',
    Benefits: 'Strengthens the chest, shoulders, triceps, and core. Great for building upper body strength and endurance.',
    steps: [
      'Start in a plank position with your hands slightly wider than shoulder-width apart.',
      'Lower your body until your chest nearly touches the floor.',
      'Push through your hands to return to the starting position.'
    ]
  },
  {
    image: Squate, 
    heading: "Squat",
    Meaning: 'Squat',
    Level: 'Beginner',
    Type: 'Lower Body',
    Benefits: 'Builds leg strength, enhances mobility in the hips, and improves overall body stability.',
    steps: [
      'Stand with your feet shoulder-width apart.',
      'Lower your body by bending your knees and pushing your hips back.',
      'Keep your chest up and return to the standing position.'
    ]
  },
  {
    image: Plank, 
    heading: "Plank",
    Meaning: 'Plank',
    Level: 'Intermediate',
    Type: 'Core',
    Benefits: 'Strengthens the core, back, and shoulders while improving posture and balance.',
    steps: [
      'Start in a push-up position with your arms straight.',
      'Keep your body in a straight line from head to heels.',
      'Hold the position for as long as possible.'
    ]
  },
  {
    image: Lunges, 
    heading: "Lunges",
    Meaning: 'Lunges',
    Level: 'Beginner',
    Type: 'Lower Body',
    Benefits: 'Improves leg strength, balance, and flexibility. Works the quads, glutes, and hamstrings.',
    steps: [
      'Stand upright, then step forward with one leg.',
      'Lower your hips until both knees are bent at about a 90-degree angle.',
      'Return to the starting position and repeat on the other side.'
    ]
  },
  {
    image: Bicycle, 
    heading: "Bicycle Crunch",
    Meaning: 'Bicycle Crunch',
    Level: 'Intermediate',
    Type: 'Core',
    Benefits: 'Strengthens the core, particularly the obliques, and improves abdominal endurance.',
    steps: [
      'Lie on your back with your hands behind your head and legs raised.',
      'Bring your right elbow to your left knee while straightening your right leg.',
      'Alternate sides in a pedaling motion.'
    ]
  },
  {
    image: Mountain, 
    heading: "Mountain Climbers",
    Meaning: 'Mountain Climbers',
    Level: 'Intermediate',
    Type: 'Full Body',
    Benefits: 'Provides a full-body workout, improving cardiovascular endurance while working the core, arms, and legs.',
    steps: [
      'Start in a plank position.',
      'Quickly drive your knees to your chest, alternating legs.',
      'Maintain a steady pace while keeping your core engaged.'
    ]
  }
];

export default ExerciseData;

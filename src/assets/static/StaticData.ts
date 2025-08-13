import {Profile} from "../../app/models/Profile";
import {Education} from "../../app/models/Education";
import {Contact} from "../../app/models/Contact";
import {Project} from "../../app/models/Project";
import {Experience} from "../../app/models/Experience";

export const staticProfile: Profile = {
  profileId: '1',
  introduction: 'Myself Tridip Mandal, a final-year B.Tech student in Electronics and Communication Engineering,\n' +
    '           is a skilled Java full-stack developer with expertise in Spring Boot and AngularJS.\n' +
    '           Proficient in C, Java, and Python, he brings hands-on internship experience and\n' +
    '           a strong aptitude for solving complex problems. Tridip is passionate about\n' +
    '           leveraging technical expertise and innovative thinking to deliver impactful,\n' +
    '           scalable solutions.',
  profileImageUrl: 'https://example.com/profile.jpg',
  resumeUrl: 'https://example.com/resume.pdf',
  facebook: 'https://facebook.com/username',
  twitter: 'https://twitter.com/username',
  instagram: 'https://instagram.com/username',
  skills: 'Java, Spring boot, AngularJS, C, Python, HTML, CSS, JavaScript, Bootstrap, MySQL, Git, Github, Docker, AWS'
};

export const staticEducations: Education [] = [
    {
        id: '1',
        level: 'Bachelor',
        degree: 'B.Tech',
        stream: 'Electronics and Communication Engineering',
        yearOfPassing: '2025',
        cgpaOrPercentage: '8.1',
        institute: 'JIS College of Engineering'
    },
    {
        id: '2',
        level: '12 Standard',
        degree: 'Higher Secondary',
        stream: 'Science',
        yearOfPassing: '2019',
        cgpaOrPercentage: '84.2%',
        institute: 'Sevayatan Vidyalaya'
    },
    {
        id: '3',
        level: '10th Standard',
        degree: 'Secondary',
        stream: 'General',
        yearOfPassing: '2019',
        cgpaOrPercentage: '76%',
        institute: 'Pirakata High School'
    }
]

export const staticContacts: Contact = {
    id: '1',
    email: 'tridip.officials@gmail.com',
    github: 'https://github.com/tridipmandal1',
    medium: 'https://medium.com/@tridipmandal16',
    linkedin: 'https://www.linkedin.com/in/tridip-mandal-55856a227/',
    stackoverflow: 'https://stackoverflow.com/users/22359996/quantaleo',
    leetcode: 'https://leetcode.com/u/tridipquanta7/'
}

export const staticProjects: Project[] = [
    {
        id: '1',
        category: 'SOFTWARE',
        title: 'Bioscope',
        technologies: 'Spring boot, Angular, Bootstrap, AWS S3, MySQL, Redis',
        description: 'Bioscope is a full-stack web application designed to streamline' +
          ' the booking and hosting of movies and events. Developed using ' +
          'Spring Boot (backend) and ReactJS (frontend), it offers two types ' +
          'of user roles: Normal Users and Hosts. Normal users can register, ' +
          'browse listings, and book tickets, while hosts can publish their ' +
          'own events or movie screenings. The system supports both email-password ' +
          'authentication and Single Sign-On (SSO) via OAuth2. Security is enforced ' +
          'using JWT-based role authentication. Admins can manage the platform, users, ' +
          'and content via a dedicated interface. With cloud storage for media (via AWS S3)' +
          ' and PostgreSQL for the database, the application ensures scalability and ' +
          'robustness. Payment integration is achieved using the Razorpay API. Bioscope ' +
          'provides a modern, responsive user experience with features such as live ' +
          'recommendations, concurrency handling, and real-time chat, making it a ' +
          'comprehensive digital solution for entertainment management.',
        githubLink: 'https://github.com/tridipmandal1/Bioscope',
        hostedLink: 'https://github.com/tridipmandal1/bioscope-ui',
        images: [],
    },
  {
    id: '2',
    category: 'SOFTWARE',
    title: 'Know Calorie',
    technologies: 'Machine Learning, Deep Learning, CNN, Python, TensorFlow, Keras, Flask',
    description: 'Know Calorie is a machine learning-powered application that predicts' +
      ' the calorie content of food items using images. Built using deep learning ' +
      'techniques—primarily Convolutional Neural Networks (CNNs)—the system is ' +
      'trained on annotated food image datasets to accurately identify food types and ' +
      'estimate calorie values. The project aims to simplify dietary monitoring and ' +
      'promote nutritional awareness by allowing users to upload food images and ' +
      'receive instant calorie predictions. This solution addresses the limitations ' +
      'of traditional calorie estimation methods by offering a faster, user-friendly,' +
      ' and scalable approach, with potential applications in healthcare, fitness, and' +
      ' personal nutrition management.',
    githubLink: 'https://github.com/tridipmandal1/Know-Calorie',
    hostedLink: '',
    images: [],
  },
  {
    id: '3',
    category: 'HARDWARE',
    title: 'Smart Vault',
    technologies: 'Arduino, R307 Fingerprint Sensor, ESP8266, GSM, Buzzer, LED',
    description: 'Smart Vault is an innovative security system designed to protect ' +
      'valuable items using biometric authentication. The system integrates an ' +
      'Arduino microcontroller with an R307 fingerprint sensor for secure access. ' +
      'Upon successful fingerprint verification, the system activates a servo motor to ' +
      'unlock the vault, while a GSM module sends a notification to the user’s mobile ' +
      'phone. Additionally, it features a buzzer and LED indicators for real-time status ' +
      'feedback. This project not only enhances security through biometric verification ' +
      'but also provides remote monitoring capabilities, making it suitable for personal ' +
      'and small business applications.',
    githubLink: '',
    hostedLink: '',
    images: []
  },
  {
    id: '4',
    category: 'SOFTWARE',
    title: 'Noise removal from images',
    technologies: 'Python, OpenCV, NumPy, Matlab',
    description: 'This project focuses on removing noise from digital images to ' +
      'enhance visual quality and clarity. Initially developed using MATLAB, the ' +
      'system applies various filtering techniques such as Gaussian, median, and ' +
      'adaptive filters to eliminate different types of noise (e.g., salt-and-pepper, ' +
      'Gaussian noise). To make the solution accessible via the web, the algorithm ' +
      'was later integrated into a Python-based web application using frameworks like ' +
      'Flask. This combination enables users to upload noisy images through a web ' +
      'interface and receive noise-reduced outputs, making the tool practical for ' +
      'real-time image enhancement and educational purposes.',
    githubLink: 'https://github.com/tridipmandal1/Noise-Removal-From-Image',
    hostedLink: '',
    images: [],
  },
  {
    id: '5',
    category: 'HARDWARE',
    title: 'Home Automation System',
    technologies: 'Arduino, ESP8266, Relay Module, Bluetooth Module',
    description: 'The Home Automation System is a versatile solution designed to ' +
      'control home appliances remotely using an Arduino microcontroller. It integrates ' +
      'an ESP8266 Wi-Fi module for internet connectivity, allowing users to manage devices ' +
      'via a mobile app or web interface. The system employs a relay module to switch appliances ' +
      'on and off, while a Bluetooth module enables local control. This project enhances ' +
      'convenience and energy efficiency by enabling users to monitor and control their home ' +
      'appliances from anywhere, making it ideal for modern smart homes.',
    githubLink: '',
    hostedLink: '',
    images: []
  }
]

export const staticExperiences: Experience [] = [
  {
    id: '1',
    company: 'Floydee Infotech Private Limited',
    position: 'Software Developer Intern',
    duration: '5 Months',
    outcomes: 'During my internship as a Software Engineer Intern from July 2024 to ' +
      'December 2024, I successfully contributed to the development and enhancement of ' +
      'production-grade applications, including Naree and Maxjobs. Working extensively ' +
      'with Spring Boot and Angular, I was able to deliver robust backend services and ' +
      'intuitive frontend interfaces that directly impacted end-users. ' +
      'My efforts resulted in improved application performance, seamless ' +
      'feature integration, and timely project deliveries. This experience ' +
      'strengthened my ability to work in a professional software development ' +
      'environment, collaborate effectively with cross-functional teams,' +
      ' and produce high-quality, maintainable code for live systems.',
    technologies: 'Spring boot, Angular',
    responsibilities: 'As part of my role, I was responsible for designing, ' +
      'developing, and testing features across both backend and frontend layers of ' +
      'the applications. I worked on implementing RESTful APIs in Spring Boot, ' +
      'integrating them with Angular-based user interfaces, and ensuring smooth ' +
      'communication between services. My tasks also included debugging production issues,' +
      ' optimizing database queries, and contributing to code reviews to maintain project ' +
      'quality standards. Additionally, I collaborated closely with senior developers, ' +
      'product managers, and QA engineers to gather requirements, translate them into' +
      ' technical solutions,' +
      ' and ensure successful deployment of updates to the production environment.',
    location: 'Kolkata',
    files: []
  },
  {
    id: '1',
    company: 'Capgemini',
    position: 'Software Engineer',
    duration: 'Currently working',
    outcomes: '-',
    technologies: '-',
    responsibilities: '-',
    location: 'Mumbai',
    files: []
  }
]

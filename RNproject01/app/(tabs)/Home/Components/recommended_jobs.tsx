import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import JobCard from "./jobcards";

export default function RecommendedJobs() {

 const jobs = [

        {
            id: 1,
            name: "Rahul Sharma",
            role: "UI/UX Designer",
            company: "Google",
            image: {
                uri: "https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
            },
            flexibility: "Work From Home",
        },

        {
            id: 2,
            name: "Aman Verma",
            role: "Frontend Developer",
            company: "Microsoft",
            image: {
                uri: "https://img.icons8.com/?size=100&id=22989&format=png&color=000000"
            },
            flexibility: "Full Time",
        },

        {
            id: 3,
            name: "Rohit Singh",
            role: "Backend Developer",
            company: "Amazon",

            image: {
                uri: "https://img.icons8.com/?size=100&id=31ntOI4KZ6HK&format=png&color=000000"
            },
            flexibility: "Hybrid",
        },

        {
            id: 4,
            name: "Priya Kapoor",
            role: "React Native Developer",
            company: "Meta",
            image: {
                uri: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_960_720.png"
            },
            flexibility: "Part Time",
        },

        {
            id: 5,
            name: "Sneha Malhotra",
            role: "Graphic Designer",
            company: "Adobe",
            image: {
                uri: "https://cdn-icons-png.flaticon.com/128/888/888835.png"
            },
            flexibility: "Remote",
        },

        {
            id: 6,
            name: "Karan Mehta",
            role: "Full Stack Developer",
            company: "Netflix",
            image: {
                uri: "https://img.icons8.com/?size=100&id=YxcpxvqEHp7W&format=png&color=000000"
            },
            flexibility: "Internship",
        },

    ];
  return (

    <View style={styles.container}>

      {/* Heading */}
      <Text style={styles.heading}>
        Recommended Jobs
      </Text>

      {/* Jobs List */}
      <View style={styles.jobsContainer}>

        {
          jobs.map((job) => (

            <JobCard
              key={job.id}
              role={job.role}
              company={job.company}
              flexibility={job.flexibility}
              image={job.image}
            />

          ))
        }

      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 40,
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1F1F1F",
    marginBottom: 18,
  },

  jobsContainer: {
    gap: 16,
  },

});
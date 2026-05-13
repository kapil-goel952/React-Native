import { View, Text, StyleSheet } from 'react-native'
import Recommended from './recomend'

export default function reco0mmended_Jobs() {
    const jobs = [

        {
            id: 1,
            name: "Rahul Sharma",
            role: "UI/UX Designer",
            company: "Google",
            companyLogo: {
                uri: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            },
            flexibility: "Work From Home",
        },

        {
            id: 2,
            name: "Aman Verma",
            role: "Frontend Developer",
            company: "Microsoft",
            companyLogo: {
                uri: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            },
            flexibility: "Full Time",
        },

        {
            id: 3,
            name: "Rohit Singh",
            role: "Backend Developer",
            company: "Amazon",

            companyLogo: {
                uri: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            },
            flexibility: "Hybrid",
        },

        {
            id: 4,
            name: "Priya Kapoor",
            role: "React Native Developer",
            company: "Meta",
            companyLogo: {
                uri: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg"
            },
            flexibility: "Part Time",
        },

        {
            id: 5,
            name: "Sneha Malhotra",
            role: "Graphic Designer",
            company: "Adobe",
            companyLogo: {
                uri: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg"
            },
            flexibility: "Remote",
        },

        {
            id: 6,
            name: "Karan Mehta",
            role: "Full Stack Developer",
            company: "Netflix",
            companyLogo: {
                uri: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            },
            flexibility: "Internship",
        },

    ];
    return (
        <View
            style={styles.main}
        >
            <View>
                <Text style={styles.mainText}>
                    Recommended Jobs
                </Text>
            </View>
            <View>
                {
                    // jobs.map((item) => {
                    //     return (

                    //         <Recommended props:item  />

                    //     )
                    // })
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        main: {
            width: "100%",
            height: 300,
            backgroundColor: "green"
        },
        mainText: {
            fontSize: 25,
            fontWeight: 800,

        }
    }
)
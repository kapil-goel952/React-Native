import { View, StyleSheet, ScrollView } from 'react-native'

import Saved_profile from '@/components/Saved_profile&Jobs/saved_profile'

export default function Profile() {
    const jobs = [

        {
            id: 1,
            name: "Rahul Sharma",
            role: "UI/UX Designer",
            company: "Google",
            companyLogo: {
                uri: "https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
            },
            flexibility: "Work From Home",
        },

        {
            id: 2,
            name: "Aman Verma",
            role: "Frontend Developer",
            company: "Microsoft",
            companyLogo: {
                uri: "https://img.icons8.com/?size=100&id=22989&format=png&color=000000"
            },
            flexibility: "Full Time",
        },

        {
            id: 3,
            name: "Rohit Singh",
            role: "Backend Developer",
            company: "Amazon",

            companyLogo: {
                uri: "https://img.icons8.com/?size=100&id=31ntOI4KZ6HK&format=png&color=000000"
            },
            flexibility: "Hybrid",
        },

        {
            id: 4,
            name: "Priya Kapoor",
            role: "React Native Developer",
            company: "Meta",
            companyLogo: {
                uri: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_960_720.png"
            },
            flexibility: "Part Time",
        },

        {
            id: 5,
            name: "Sneha Malhotra",
            role: "Graphic Designer",
            company: "Adobe",
            companyLogo: {
                uri: "https://cdn-icons-png.flaticon.com/128/888/888835.png"
            },
            flexibility: "Remote",
        },

        {
            id: 6,
            name: "Karan Mehta",
            role: "Full Stack Developer",
            company: "Netflix",
            companyLogo: {
                uri: "https://img.icons8.com/?size=100&id=YxcpxvqEHp7W&format=png&color=000000"
            },
            flexibility: "Internship",
        },

    ];
    return (
        <View style={
            styles.main
        }>
            <ScrollView>
                {
                    jobs.map((item) => {
                        return (
                            <View 
                                key={item.id}
                                style={styles.card} 
                            >
                                <Saved_profile image={item.companyLogo} role={item.role} company={item.company} flexibility={item.flexibility} />
                            </View>
                        )
                    })
                }
            </ScrollView>
            <View
                style={
                    styles.Footer
                }>
           
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    main: {
        width: "100%",
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)",
    },
    Footer: {
        width: "100%"
    },
    card:{
        marginLeft:10,
        marginRight:10
    }
})
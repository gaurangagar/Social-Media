const data = [
    {
        name: "Aarav Mehta",
        email: "aarav.mehta@example.com",
        password: "Aarav@123",
        posts_count: 3,
        followers: 120,
        following: 85,
        posts: [
            { likes: 45, comments: 5 },
            { likes: 78, comments: 10 },
            { likes: 23, comments: 3 }
        ]
    },
    {
        name: "Neha Sharma",
        email: "neha.sharma@example.com",
        password: "Neha@456",
        posts_count: 2,
        followers: 200,
        following: 150,
        posts: [
            { likes: 95, comments: 12 },
            { likes: 110, comments: 15 }
        ]
    },
    {
        name: "Rohan Gupta",
        email: "rohan.gupta@example.com",
        password: "Rohan@789",
        posts_count: 4,
        followers: 300,
        following: 270,
        posts: [
            { likes: 130, comments: 20 },
            { likes: 140, comments: 25 },
            { likes: 90, comments: 8 },
            { likes: 65, comments: 5 }
        ]
    },
    {
        name: "Simran Kaur",
        email: "simran.kaur@example.com",
        password: "Simran@321",
        posts_count: 5,
        followers: 180,
        following: 160,
        posts: [
            { likes: 70, comments: 9 },
            { likes: 60, comments: 7 },
            { likes: 50, comments: 6 },
            { likes: 80, comments: 12 },
            { likes: 90, comments: 14 }
        ]
    },
    {
        name: "Vikas Yadav",
        email: "vikas.yadav@example.com",
        password: "Vikas@654",
        posts_count: 3,
        followers: 250,
        following: 200,
        posts: [
            { likes: 120, comments: 18 },
            { likes: 85, comments: 10 },
            { likes: 95, comments: 13 }
        ]
    }
];

export const setLocalStorage=()=>{
    localStorage.setItem('data',JSON.stringify(data));
}

export const getLocalStorage=()=>{
    const data=JSON.parse(localStorage.getItem('data'))
    return data
}
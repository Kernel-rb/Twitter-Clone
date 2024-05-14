export const POSTS = [
    {
        _id: "4",
        text: "I'm learning GO this week. Any tips? 🤔",
        img: "/posts/post3.png",
        user: {
            username: "gent_ar",
            profileImg: "/avatars/gent_ar.jpg",
            fullName: "Ilyass Akioui",
        },
        comments: [
            {
                _id: "1",
                text: "",
                user: {
                    username: "janedoe",
                    profileImg: "/avatars/girl3.png",
                    fullName: "Jane Doe",
                },
            },
        ],
        likes: [
            "6658s891",
            "6658s892",
            "6658s893",
            "6658s894",
            "6658s895",
            "6658s896",
            "6658s897",
            "6658s898",
            "6658s899",
        ],
    },
    {
        _id: "1",
        text: "Demystifying Data Types in C",
        img: "/posts/post1.png",
        user: {
            username: "SamirDrahm",
            profileImg: "/avatars/boy1.png",
            fullName: "Samir Fezani",
        },
        comments: [
            {
                _id: "1",
                text: "Nice Tutorial",
                user: {
                    username: "janedoe",
                    profileImg: "/avatars/girl1.png",
                    fullName: "Jane Doe",
                },
            },
        ],
        likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
    },
    {
        _id: "2",
        text: "How you guys doing? 😊",
        user: {
            username: "-50e",
            profileImg: "/avatars/boy2.png",
            fullName: "Ossama Elhayiane",
        },
        comments: [
            {
                _id: "1",
                text: "We are doing great! 😊",
                user: {
                    username: "janedoe",
                    profileImg: "/avatars/girl2.png",
                    fullName: "Jane Doe",
                },
            },
        ],
        likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
    },
    {
        _id: "3",
        text: "Astronaut in a room of drawers, generated by Midjourney. 🚀",
        img: "/posts/post2.png",
        user: {
            username: "Othmane Dounit",
            profileImg: "/avatars/othmane.png",
            fullName: "ecomerce_dev",
        },
        comments: [],
        likes: ["6658s891", "6658s892", "6658s893", "6658s894", "6658s895", "6658s896"],
    },
];

// suggested users 
export const USERS_FOR_RIGHT_PANEL = [
    {
        _id: "1",
        fullName: "Ilyass Akioui",
        username: "gent_ar",
        profileImg: "/avatars/gent_ar.jpg",
    },
    {
        _id: "2",
        fullName: "Samir Fezani",
        username: "SamirDrahm",
        profileImg: "/avatars/girl1.png",
    },
    {
        _id: "3",
        fullName: "Othmane Dounit",
        username: "ecoomerce_dev",
        profileImg: "/avatars/othmane.png",
    },
    {
        _id: "4",
        fullName: "Ossama Elhayiane",
        username: "-50e",
        profileImg: "/avatars/girl2.png",
    },
];
const cardsData = [ 
    {
        text: "Shot!",
        rule: "Take a shot!",
        image: "./img/shot.png"
    }, 
    {
        text: "Truth or Dare",
        rule: "You can ask anyone you choose \"truth or dare?\"",
        image: "./img/t-or-d.png"
    }, 
    {
        text: "Compliment the boys",
        rule: "Tell the boys something nice!",
        image: "./img/compliment-the-boys.png"
    }, 
    {
        text: "Fuck, Marry, Kill. Go!",
        rule: "You get to ask anyone they choose fuck, marry, kill. You choose the 3 people.",
        image: "./img/fuck-marry-kill.png"
    }, 
    {
        text: "Answer any question",
        rule: "You are in the hotseat. Everyone else gets to ask you a question and you must answer!",
        image: "./img/answer-any-question.png"
    }, 
    {
        text: "Best personality?",
        rule: "You say who you think has the best personality. They must drink 1 time.",
        image: "./img/best-personality.png"
    }, 
    {
        text: "Truth",
        rule: "You get to ask anyone you choose. They must answer your question!",
        image: "./img/truth.png"
    }, 
    {
        text: "Dont judge me, but...",
        rule: "What's your hot take?",
        image: "./img/dont-judge.png"
    }, 
    {
        text: "Choose someone to drink",
        rule: "You choose someone to take a drink.",
        image: "./img/choose-someone-to-drink.png"
    }, 
    {
        text: "What are the odds?",
        rule: "You ask anyone you'd like. You can try to bargain them down by betting drinks (for example: their odds are 1/15 and you say \"would you go down to 1/10 if I double my drinks?\"). If they answer 1/2, and you get it wrong, you automatically do what you asked! If not, you drink 2 times if you get it wrong",
        image: "./img/odds.png"
    }, 
    {
        text: "Group shots!",
        rule: "Everyone drink!",
        image: "./img/group-shots.png"
    }, 
    {
        text: "Biggest bitch",
        rule: "You choose the biggest bitch, they drink!",
        image: "./img/biggest-bitch.png"
    }, 
    {
        text: "Compliment the girls",
        rule: "Tell the girls something nice!",
        image: "./img/compliment-the-girls.png"
    }, 
    {
        text: "Chicks",
        rule: "Girls drink!",
        image: "./img/chicks.png"
    }, 
    {
        text: "Dudes",
        rule: "Guys drink!",
        image: "./img/dudes.png"
    }, 
    {
        text: "Roast your neighbor",
        rule: "Roast their existence. The person above and below you are your neighbors",
        image: "./img/roast-your-neighbor.png"
    }, 
    {
        text: "Finish your drink!",
        rule: "Get it in ya!",
        image: "./img/finish.png"
    }, 
    {
        text: "Neighbors drink",
        rule: "The people above and below you drink!",
        image: "./img/neighbors.png"
    },
    {
        text: "Snap or text your crush",
        rule: "Snap or text? You choose.",
        image: "./img/snap-your-crush.png"
    }, 
    {
        text: "Text someone you hate",
        rule: "This could be awkward...",
        image: "./img/text-someone-you-hate.png"
    }, 
    {
        text: "You're a bitch if you haven't",
        rule: "You say something you've done. If someone hasn't done it, they drink 2 times.",
        image: "./img/bitch-if-you-havent.png"
    },     
    {
        text: "Animal Sounds",
        rule: "You make animal sounds for a whole round whenever you want to talk.",
        image: "./img/animal-sounds.png"
    }, 
    {
        text: "Athletes",
        rule: "All athletes drink!",
        image: "./img/athletes.png"
    },
    {
        text: "Blue Eyes",
        rule: "Blue eyes take a sip!",
        image: "./img/blue-eyes.png"
    }, 
    {
        text: "Brown Eyes",
        rule: "Brown eyes take a sip!",
        image: "./img/brown-eyes.png"
    }, 
    {
        text: "Categories",
        rule: "You choose the category. You then go in order from the names list saying things within the category. First to mess up (or if they can't think of something) drinks.",
        image: "./img/categories.png"
    }, 
    {
        text: "Confession",
        rule: "Tell your friends a personal confession!",
        image: "./img/confession.png"
    }, 
    {
        text: "Dare",
        rule: "You choose who does it. They must comply or finish a full drink.",
        image: "./img/dare.png"
    },
    {
        text: "Dance",
        rule: "You must dance for a whole round!",
        image: "./img/dance.png"
    }, 
    {
        text: "Drunk call an ex",
        rule: "Make sure it's on speakerphone!",
        image: "./img/drunk-call-ex.png"
    }, 
    {
        text: "Drunk story",
        rule: "Post a story on your snapchat or instagram. If you're not drunk yet you must pretend to be blackout drunk. If you are drunk have some fun!",
        image: "./img/drunk-story.png"
    }, 
    {
        text: "Snapchat Roulette",
        rule: "You must a picture of your face with the caption \"I have something I need to tell you...\", then you scroll through you friends list until someone says stop. You must send it to the person your finger lands on!",
        image: "./img/snap-roulette.png"
    }, 
    {
        text: "Virgin Story",
        rule: "Tell the story about how you lost your virginity. Don't be afraid to get some details in there!",
        image: "./img/first.png"
    },
    {
        text: "Green Eyes",
        rule: "Green eyes take a sip!",
        image: "./img/green-eyes.png"
    }, 
    {
        text: "Highest score drink x5",
        rule: "Congrats, the player closest to the finish must drink 5 times.",
        image: "./img/highest.png"
    }, 
    {
        text: "Most likely to",
        rule: "You make it up. Everyone votes. Whoever it is must drink 3 times.",
        image: "./img/most-likely-to.png"
    }, 
    {
        text: "Least drunk",
        rule: "Least drunk, get a few in you!",
        image: "./img/least-drunk.png"
    }, 
    {
        text: "Nose Goes",
        rule: "Last person to touch their nose drinks 2 times",
        image: "./img/nose-goes.png"
    },
    {
        text: "Piercings",
        rule: "Every person with a piercing in the game should take a sip.",
        image: "./img/piercings.png"
    }, 
    {
        text: "Roll Again",
        rule: "Lucky you! Go again.",
        image: "./img/roll-again.png"
    }, 
    {
        text: "Sex Charades",
        rule: "Act out your favourite sex position.",
        image: "./img/sex-charades.png"
    }, 
    {
        text: "Single!",
        rule: "If you're single, drink!",
        image: "./img/single.png"
    }, 
    {
        text: "Best Smile",
        rule: "You say who you think has the best smile, they drink 3 times.",
        image: "./img/smile.png"
    },
    {
        text: "Taken",
        rule: "If you're taken, drink!",
        image: "./img/taken.png"
    }, 
    {
        text: "Tattoo",
        rule: "If you have a tattoo, drink!",
        image: "./img/tatto.png"
    }, 
    {
        text: "Make a Toast",
        rule: "Make a toast for all your friends, then everyone drink together!",
        image: "./img/toast.png"
    },
    {
        text: "Two truths and a lie",
        rule: "Say two truths and one lie about yourself. Everyone else must guess the lie. Whoever gets it wrong drinks!",
        image: "./img/two-truths.png"
    }, 
    {
        text: "Waterfall",
        rule: "Starting with you, everyone start drinking. Each person can stop when the person in front of them stops.",
        image: "./img/waterfall.png"
    }, 
    {
        text: "Would you rather?",
        rule: "You ask whoever you would like. They must answer, if they can't they have to finish a full drink.",
        image: "./img/would-you-rather.png"
    }, 
    {
        text: "Youngest and oldest drink",
        rule: "Youngest and oldest players take a sip each.",
        image: "./img/youngest-and-oldest.png"
    },
    {
        text: "Shot!",
        rule: "Take a shot!",
        image: "./img/shot.png"
    }, 
    {
        text: "Truth or Dare",
        rule: "You can ask anyone you choose \"truth or dare?\"",
        image: "./img/t-or-d.png"
    }, 
    {
        text: "Compliment the boys",
        rule: "Tell the boys something nice!",
        image: "./img/compliment-the-boys.png"
    }, 
    {
        text: "Fuck, Marry, Kill. Go!",
        rule: "You get to ask anyone they choose fuck, marry, kill. You choose the 3 people.",
        image: "./img/fuck-marry-kill.png"
    }, 
    {
        text: "Answer any question",
        rule: "You are in the hotseat. Everyone else gets to ask you a question and you must answer!",
        image: "./img/answer-any-question.png"
    }, 
    {
        text: "Best personality?",
        rule: "You say who you think has the best personality. They must drink 1 time.",
        image: "./img/best-personality.png"
    }, 
    {
        text: "Truth",
        rule: "You get to ask anyone you choose. They must answer your question!",
        image: "./img/truth.png"
    }, 
    {
        text: "Dont judge me, but...",
        rule: "What's your hot take?",
        image: "./img/dont-judge.png"
    }, 
    {
        text: "Choose someone to drink",
        rule: "You choose someone to take a drink.",
        image: "./img/choose-someone-to-drink.png"
    }, 
    {
        text: "What are the odds?",
        rule: "You ask anyone you'd like. You can try to bargain them down by betting drinks (for example: their odds are 1/15 and you say \"would you go down to 1/10 if I double my drinks?\"). If they answer 1/2, and you get it wrong, you automatically do what you asked! If not, you drink 2 times if you get it wrong",
        image: "./img/odds.png"
    }, 
    {
        text: "Group shots!",
        rule: "Everyone drink!",
        image: "./img/group-shots.png"
    }, 
    {
        text: "Biggest bitch",
        rule: "You choose the biggest bitch, they drink!",
        image: "./img/biggest-bitch.png"
    }, 
    {
        text: "Compliment the girls",
        rule: "Tell the girls something nice!",
        image: "./img/compliment-the-girls.png"
    }, 
    {
        text: "Chicks",
        rule: "Girls drink!",
        image: "./img/chicks.png"
    }, 
    {
        text: "Dudes",
        rule: "Guys drink!",
        image: "./img/dudes.png"
    }, 
    {
        text: "Roast your neighbor",
        rule: "Roast their existence. The person above and below you are your neighbors",
        image: "./img/roast-your-neighbor.png"
    }, 
    {
        text: "Finish your drink!",
        rule: "Get it in ya!",
        image: "./img/finish.png"
    }, 
    {
        text: "Neighbors drink",
        rule: "The people above and below you drink!",
        image: "./img/neighbors.png"
    },
    {
        text: "Snap or text your crush",
        rule: "Snap or text? You choose.",
        image: "./img/snap-your-crush.png"
    }, 
    {
        text: "Text someone you hate",
        rule: "This could be awkward...",
        image: "./img/text-someone-you-hate.png"
    }, 
    {
        text: "You're a bitch if you haven't",
        rule: "You say something you've done. If someone hasn't done it, they drink 2 times.",
        image: "./img/bitch-if-you-havent.png"
    },     
    {
        text: "Animal Sounds",
        rule: "You make animal sounds for a whole round whenever you want to talk.",
        image: "./img/animal-sounds.png"
    }, 
    {
        text: "Athletes",
        rule: "All athletes drink!",
        image: "./img/athletes.png"
    },
    {
        text: "Blue Eyes",
        rule: "Blue eyes take a sip!",
        image: "./img/blue-eyes.png"
    }, 
    {
        text: "Brown Eyes",
        rule: "Brown eyes take a sip!",
        image: "./img/brown-eyes.png"
    }, 
    {
        text: "Categories",
        rule: "You choose the category. You then go in order from the names list saying things within the category. First to mess up (or if they can't think of something) drinks.",
        image: "./img/categories.png"
    }, 
    {
        text: "Confession",
        rule: "Tell your friends a personal confession!",
        image: "./img/confession.png"
    }, 
    {
        text: "Dare",
        rule: "You choose who does it. They must comply or finish a full drink.",
        image: "./img/dare.png"
    },
    {
        text: "Dance",
        rule: "You must dance for a whole round!",
        image: "./img/dance.png"
    }, 
    {
        text: "Drunk call an ex",
        rule: "Make sure it's on speakerphone!",
        image: "./img/drunk-call-ex.png"
    }, 
    {
        text: "Drunk story",
        rule: "Post a story on your snapchat or instagram. If you're not drunk yet you must pretend to be blackout drunk. If you are drunk have some fun!",
        image: "./img/drunk-story.png"
    }, 
    {
        text: "Snapchat Roulette",
        rule: "You must a picture of your face with the caption \"I have something I need to tell you...\", then you scroll through you friends list until someone says stop. You must send it to the person your finger lands on!",
        image: "./img/snap-roulette.png"
    }, 
    {
        text: "Virgin Story",
        rule: "Tell the story about how you lost your virginity. Don't be afraid to get some details in there!",
        image: "./img/first.png"
    },
    {
        text: "Green Eyes",
        rule: "Green eyes take a sip!",
        image: "./img/green-eyes.png"
    }, 
    {
        text: "Highest score drink x5",
        rule: "Congrats, the player closest to the finish must drink 5 times.",
        image: "./img/highest.png"
    }, 
    {
        text: "Most likely to",
        rule: "You make it up. Everyone votes. Whoever it is must drink 3 times.",
        image: "./img/most-likely-to.png"
    }, 
    {
        text: "Least drunk",
        rule: "Least drunk, get a few in you!",
        image: "./img/least-drunk.png"
    }, 
    {
        text: "Nose Goes",
        rule: "Last person to touch their nose drinks 2 times",
        image: "./img/nose-goes.png"
    },
    {
        text: "Piercings",
        rule: "Every person with a piercing in the game should take a sip.",
        image: "./img/piercings.png"
    }, 
    {
        text: "Roll Again",
        rule: "Lucky you! Go again.",
        image: "./img/roll-again.png"
    }, 
    {
        text: "Sex Charades",
        rule: "Act out your favourite sex position.",
        image: "./img/sex-charades.png"
    }, 
    {
        text: "Single!",
        rule: "If you're single, drink!",
        image: "./img/single.png"
    }, 
    {
        text: "Best Smile",
        rule: "You say who you think has the best smile, they drink 3 times.",
        image: "./img/smile.png"
    },
    {
        text: "Taken",
        rule: "If you're taken, drink!",
        image: "./img/taken.png"
    }, 
    {
        text: "Tattoo",
        rule: "If you have a tattoo, drink!",
        image: "./img/tatto.png"
    }, 
    {
        text: "Make a Toast",
        rule: "Make a toast for all your friends, then everyone drink together!",
        image: "./img/toast.png"
    },
    {
        text: "Two truths and a lie",
        rule: "Say two truths and one lie about yourself. Everyone else must guess the lie. Whoever gets it wrong drinks!",
        image: "./img/two-truths.png"
    }, 
    {
        text: "Waterfall",
        rule: "Starting with you, everyone start drinking. Each person can stop when the person in front of them stops.",
        image: "./img/waterfall.png"
    }, 
    {
        text: "Would you rather?",
        rule: "You ask whoever you would like. They must answer, if they can't they have to finish a full drink.",
        image: "./img/would-you-rather.png"
    }, 
    {
        text: "Youngest and oldest drink",
        rule: "Youngest and oldest players take a sip each.",
        image: "./img/youngest-and-oldest.png"
    },
    
]

export default cardsData
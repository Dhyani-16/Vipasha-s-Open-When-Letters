// =========================
// ELEMENTS
// =========================

const letterModal = document.getElementById("letterModal");
const letterEnvelope = document.getElementById("letterEnvelope");
const letterTitle = document.getElementById("letterTitle");
const letterMessage = document.getElementById("letterMessage");
const letterSignature = document.getElementById("letterSignature");
const closeLetter = document.getElementById("closeLetter");


// =========================
// STAR FIELD
// =========================

function createStarField() {

    const starsContainer =
        document.querySelector(".stars");

    if (!starsContainer) {
        return;
    }

    starsContainer.innerHTML = "";

    const starSymbols = [
        "✦",
        "✧",
        "⋆",
        "·",
        "✦",
        "⋆"
    ];

    const numberOfStars = 80;

    for (let i = 0; i < numberOfStars; i++) {

        const star = document.createElement("span");

        star.classList.add("star");

        star.textContent =
            starSymbols[
                Math.floor(Math.random() * starSymbols.length)
            ];

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.setProperty(
            "--star-size",
            (Math.random() * 10 + 7) + "px"
        );

        star.style.setProperty(
            "--star-opacity",
            Math.random() * 0.45 + 0.2
        );

        star.style.setProperty(
            "--star-duration",
            (Math.random() * 5 + 5) + "s"
        );

        star.style.setProperty(
            "--star-delay",
            Math.random() * 5 + "s"
        );

        star.style.setProperty(
            "--float-x",
            (Math.random() * 16 - 8) + "px"
        );

        star.style.setProperty(
            "--float-y",
            (Math.random() * 16 - 8) + "px"
        );

        starsContainer.appendChild(star);

    }

}

createStarField();


// =========================
// LETTER CONTENT
// =========================

const letters = {

    sad: {
        icon: "💌",
        title: "You're feeling sad",
        message: "I don't know what happened, and I don't need to right now. Just — call me. Doesn't matter if we talk or if we just sit there with the video on and say nothing for an hour. That's still ours. You don't have to be okay on this call. You just have to be here.",
        signature: "— call me, silence and all"
    },

    happy: {
        icon: "🌷",
        title: "You're really happy",
        message: "Whatever this is — don't shrink it to make it easier to explain. Let it be as big as it actually is. And when you're ready, tell me everything, even the small details you think don't matter. I want all of it, not the summary.",
        signature: "— tell me the long version"
    },

    angry: {
        icon: "🌙",
        title: "You're angry",
        message: "Say whatever ridiculous, over-the-top thing you need to say. I've heard worse from you and I've said worse back. This is a safe place to be dramatic before you have to be reasonable with everyone else.",
        signature: "— rant first, think later"
    },

    missing: {
        icon: "🫶",
        title: "You miss me",
        message: "I know distance makes it feel like we're on different timelines sometimes. But you're one call away, always. Distance was never actually the thing that could break this — we've survived worse than a few time zones.",
        signature: "— one call away, always"
    },

    celebrating: {
        icon: "🥂",
        title: "You have something to celebrate",
        message: "Don't you dare downplay this. Whatever it is, however small it feels to you, it's a win and I want to hear about it properly — not the modest version, the real one.",
        signature: "— tell me the real version"
    },

    reminder: {
        icon: "✨",
        title: "You need a reminder",
        message: "You are one of maybe three people on this planet I still fully trust, and that is not a small thing coming from either of us. We're both a little jaded about people in general — but you're the exception, and you always have been.",
        signature: "— the exception, always"
    },

    sleepless: {
        icon: "🌌",
        title: "You can't sleep",
        message: "If it's this late and your brain won't stop, call me. I mean it, even if it's just to put the phone down next to the pillow and let the call run while we both eventually pass out. We've done that a hundred times. We can do it again.",
        signature: "— phone on, brain off, eventually"
    },

    overwhelmed: {
        icon: "🌊",
        title: "You're overwhelmed",
        message: "You don't have to hold all of it at once. Pick the one thing that actually needs to happen today and let everything else wait. I'll be on call while you do it if that helps — you don't have to talk, I'll just be there.",
        signature: "— one thing, then breathe"
    },

    doubting: {
        icon: "🕯️",
        title: "You're doubting yourself",
        message: "Whatever your brain is telling you right now, I've known you long enough to know it's wrong. I watched you get through M.Tech, through heartbreaks that should've flattened us both, through more than most people ever have to. You are not who your worst thoughts say you are.",
        signature: "— I've seen the evidence, you're wrong about yourself"
    },

    badday: {
        icon: "🍵",
        title: "You had a really bad day",
        message: "I'm not going to tell you it'll be fine or ask what you could've done differently. Just get on a call. We don't have to talk about it. We don't have to talk at all. Let's just exist in the same call for a while.",
        signature: "— no talking required"
    },

    laugh: {
        icon: "😂",
        title: "You need to laugh",
        message: "Think about literally any one of our M.Tech disasters. Pick one. I guarantee it still holds up. We survived things that were genuinely unhinged and somehow still laugh about them — that's basically our whole friendship in one sentence.",
        signature: "— M.Tech survivors, still laughing"
    },

    proud: {
        icon: "🌟",
        title: "You're proud of yourself but won't say it",
        message: "You don't have to perform modesty with me. Say the thing. Say \"I did that and it was hard and I'm proud of it\" out loud, even if it's just to me on a call. I already think you're impressive — you're allowed to think so too, just this once.",
        signature: "— you're allowed to say it"
    },

    lonely: {
        icon: "🌍",
        title: "You feel lonely",
        message: "I know long distance can make loneliness feel bigger than it should. But you're not actually alone — you have someone who'd rather sit in silence on a call with you than talk to most people in the room next to them. Geography isn't the same as distance.",
        signature: "— geography isn't the same as distance"
    },

    birthday: {
        icon: "🎂",
        title: "It's your birthday",
        message: "Happy birthday, Vipasha. I hope this year gives you fewer heartbreaks and more of the good, ridiculous, laugh-until-it-hurts kind of days. And however far apart we are when you read this, know I'm celebrating you from wherever I am.",
        signature: "— celebrating you from wherever I am"
    },

    peptalk: {
        icon: "🔥",
        title: "You need a pep talk before something big",
        message: "Whatever this is, you've already done harder things than this. You survived M.Tech deadlines that should not have been survivable. You've rebuilt yourself after heartbreak, more than once. This is just one more thing you're going to get through. Go do it.",
        signature: "— you've survived harder than this"
    },

    givingup: {
        icon: "🕊️",
        title: "You feel like giving up",
        message: "Don't make any big decisions tonight. Just get through today, and then tomorrow, and let's talk before you decide anything permanent about something temporary. I've watched you rebuild from worse than this. You will again. I'm not going anywhere.",
        signature: "— not going anywhere, don't decide tonight"
    },

    overthinking: {
        icon: "🌀",
        title: "You're overthinking at 3am",
        message: "Stop typing it out and just call me. You know the rule — if it's the kind of thought that only gets louder at 3am, it's not a text conversation, it's a call-me conversation. Even if neither of us says much.",
        signature: "— it's a call-me thought, not a text one"
    },

    uncertain: {
        icon: "🧭",
        title: "Things feel uncertain about the future",
        message: "We've both said it a hundred times — this world and most of the people in it can be exhausting to trust. But we still love the world as a place, don't we? All the strange, beautiful parts of it we haven't seen yet. Whatever's uncertain right now, that part hasn't changed.",
        signature: "— we still love the world as a place"
    },

    homesick: {
        icon: "🏠",
        title: "You miss home",
        message: "Long distance is hard in a way people who haven't done it don't really get. But home isn't just a place — it's also a person who still knows exactly what you mean without you finishing the sentence. You have that here, even from far away.",
        signature: "— home is also a person, not just a place"
    },

    hug: {
        icon: "🫂",
        title: "You need a hug but no one's around",
        message: "Get on a video call with me. We don't have to say anything — we've done that before, just existing on a call together in total silence, and it still helped. Let's do that again. Camera on, nothing required except being there.",
        signature: "— silence, camera on, still counts"
    }

};


// =========================
// OPEN WHEN LETTERS
// =========================

const letterCards =
    document.querySelectorAll(".letter-card");

letterCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const letterType = card.dataset.letter;

        const letter = letters[letterType];

        if (!letter) {
            return;
        }

        letterEnvelope.textContent = letter.icon;
        letterTitle.textContent = letter.title;
        letterMessage.textContent = letter.message;
        letterSignature.textContent = letter.signature;

        letterModal.classList.add("active");

    });

});


// =========================
// CLOSE LETTER
// =========================

closeLetter.addEventListener("click", function () {

    letterModal.classList.remove("active");

});

letterModal.addEventListener("click", function (event) {

    if (event.target === letterModal) {

        letterModal.classList.remove("active");

    }

});

document.addEventListener("keydown", function (event) {

    if (
        event.key === "Escape" &&
        letterModal.classList.contains("active")
    ) {

        letterModal.classList.remove("active");

    }

});

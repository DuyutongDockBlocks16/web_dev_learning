const getFeedbackCount = async (courseId, sessionId, feedbackId, sessionCounts) => {

    const idCombination = sessionId+courseId;

    return sessionCounts.get(idCombination) ?? 0;

    // const kv = await Deno.openKv();
    // const store = await kv.get(["feedbacks", courseId, id]);
    // return store?.value ?? 0;
};

const incrementFeedbackCount = async (courseId, sessionId, feedbackId, sessionCounts) => {

    const idCombination = sessionId+courseId;

    sessionCounts.set(idCombination, Number(feedbackId));

    // const kv = await Deno.openKv();
    // const count = await getFeedbackCount(courseId, id);
    // await kv.set(["feedbacks", courseId, id], count + 1);
};

export { getFeedbackCount, incrementFeedbackCount };
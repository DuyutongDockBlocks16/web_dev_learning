const getFeedbackCount = async (courseId, id) => {
    const kv = await Deno.openKv();
    const store = await kv.get(["feedbacks", courseId, id]);
    return store?.value ?? 0;
};

const incrementFeedbackCount = async (courseId, id) => {
    const kv = await Deno.openKv();
    const count = await getFeedbackCount(courseId, id);
    await kv.set(["feedbacks", courseId, id], count + 1);
};

export { getFeedbackCount, incrementFeedbackCount };
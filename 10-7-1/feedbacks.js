const getFeedbackCount = async (id) => {
    const kv = await Deno.openKv();
    const store = await kv.get(["feedbacks", id]);
    return store?.value ?? 0;
};

const incrementFeedbackCount = async (id) => {
    const kv = await Deno.openKv();
    const count = await getFeedbackCount(id);
    await kv.set(["feedbacks", id], count + 1);
};

export { getFeedbackCount, incrementFeedbackCount };

const getFeedback1 = async () => {
    const kv = await Deno.openKv();
    const feedback1_kv = await kv.get(["feedback1"]);
    return feedback1_kv.value ?? 0;
}

const incrementFeedback1 = async () => {
    let count = await getFeedback1();
    count++;
    await setFeedback1(count);
}

const setFeedback1 = async (value) => {
    const kv = await Deno.openKv();
    await kv.set(["feedback1"],value)
}

const getFeedback2 = async () => {
    const kv = await Deno.openKv();
    const feedback1_kv = await kv.get(["feedback2"]);
    return feedback1_kv.value ?? 0;
}

const incrementFeedback2 = async () => {
    let count = await getFeedback2();
    count++;
    await setFeedback2(count);
}

const setFeedback2 = async (value) => {
    const kv = await Deno.openKv();
    await kv.set(["feedback2"],value)
}

const getFeedback3 = async () => {
    const kv = await Deno.openKv();
    const feedback1_kv = await kv.get(["feedback3"]);
    return feedback1_kv.value ?? 0;
}

const incrementFeedback3 = async () => {
    let count = await getFeedback3();
    count++;
    await setFeedback3(count);
}

const setFeedback3 = async (value) => {
    const kv = await Deno.openKv();
    await kv.set(["feedback3"],value)
}

export {getFeedback1, incrementFeedback3, setFeedback2, incrementFeedback2, getFeedback2, getFeedback3, incrementFeedback1, setFeedback3, setFeedback1}

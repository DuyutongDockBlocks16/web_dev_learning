const getVisits = async () =>{
    const kv = await Deno.openKv();
    const visit_kv = await kv.get(["visits"]);
    return visit_kv.value ?? 0;
}
const incrementVisits = async () => {
    let visit_count = await getVisits();
    // console.log(visit_count);
    visit_count++;
    // console.log(visit_count);
    await setVisits(visit_count);
}

const setVisits = async (value) =>{
    const kv = await Deno.openKv();
    await kv.set(["visits"],value)
}


export {getVisits, incrementVisits, setVisits}
const getStore = async () => {
    const kv = await Deno.openKv();
    const store_name_kv = await kv.get(["store"]);

    return store_name_kv.value ?? "Nothing.";
};

const setStore = async (s) => {
    const kv = await Deno.openKv();
    await kv.set(["store"], s);
};

export { getStore, setStore };

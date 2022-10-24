try {
    throw new Error("handled");
} catch (error) {
    console.log("error", error);
}

throw new Error("unhandled");

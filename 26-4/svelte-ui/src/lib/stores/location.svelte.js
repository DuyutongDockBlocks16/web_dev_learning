let initialLocation = { x: 0, y: 0 };

if (
    typeof window !== "undefined" &&
    localStorage.hasOwnProperty("location")
) {
    initialLocation = JSON.parse(localStorage.getItem("location"));
}

let location = $state(initialLocation);

const useLocationStore = () => {
    return {
        get location() {
            return location;
        },
        up: () => {
            location.y++;
            location = { ...location };
            localStorage.setItem("location", JSON.stringify(location));
        },
        down: () => {
            location.y--;
            location = { ...location };
            localStorage.setItem("location", JSON.stringify(location));
        },
        left: () => {
            location.x--;
            location = { ...location };
            localStorage.setItem("location", JSON.stringify(location));
        },
        right: () => {
            location.x++;
            location = { ...location };
            localStorage.setItem("location", JSON.stringify(location));
        },
    };
};

export { useLocationStore };
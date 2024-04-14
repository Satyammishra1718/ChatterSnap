export const validateLoginField = (value: string, id: string) => {
    switch (id) {
        case "Username":
            const usernameRegex = /^[a-zA-Z0-9_@!#$%^&*()]{3,20}$/;
            return !usernameRegex.test(value.trim())
                ? "Username should be 3 to 20 characters long"
                : "";

        case "Password":
            return value.length < 8
                ? "Password must be at least 8 characters long"
                : /\s/.test(value) || value.trim() === ""
                    ? "Password cannot contain empty spaces"
                    : "";

        default:
            return "";
    }
};

export const validateRegisterField = (value: string, id: string) => {
    switch (id) {

        case "FullName":
            const fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
            return !fullNameRegex.test(value.trim())
                ? "Full Name should be in the format 'Virat Kohli'"
                : "";

        case "Username":
            const usernameRegex = /^[a-zA-Z0-9_@!#$%^&*()]{3,20}$/;
            return !usernameRegex.test(value.trim())
                ? "Username should be 3 to 20 characters long"
                : "";

        case "Password":
            return value.length < 8
                ? "Password must be at least 8 characters long"
                : /\s/.test(value) || value.trim() === ""
                    ? "Password cannot contain empty spaces"
                    : "";

        case "Bio":
            return value.trim() === ""
                ? "Bio cannot be empty"
                : "";

        default:
            return "";
    }
} 

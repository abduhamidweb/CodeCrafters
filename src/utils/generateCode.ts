export const generateCode = (): string => {
    const code = Math.floor(100000 + Math.random() * 900000); // 6 xonali raqamli kod
    return code.toString();
};

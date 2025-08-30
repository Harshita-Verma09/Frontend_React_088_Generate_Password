import React, { useState } from "react";

export default function PasswordGenerator() {
    const [length, setLength] = useState<number>(12);
    const [includeLower, setIncludeLower] = useState<boolean>(true);
    const [includeUpper, setIncludeUpper] = useState<boolean>(true);
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
    const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
    const [password, setPassword] = useState<string>("");

    
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    const generatePassword = () => {
        let charPool = "";
        if (includeLower) charPool += lowerChars;
        if (includeUpper) charPool += upperChars;
        if (includeNumbers) charPool += numberChars;
        if (includeSymbols) charPool += symbolChars;

        if (charPool === "") {
            alert("Please select at least one character type!");
            return;
        }

        let generated = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charPool.length);
            generated += charPool[randomIndex];
        }
        setPassword(generated);
    };

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f4f4f4",
            }}
        >
            <div
                style={{
                    background: "#fff",
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    width: "300px",
                    textAlign: "center",
                }}
            >
                <h2 style={{ marginBottom: "20px" }}>Password Generator</h2>

                <div style={{ marginBottom: "15px", textAlign: "left" }}>
                    <label>
                        Length:
                        <input
                            type="number"
                            value={length}
                            min={4}
                            max={32}
                            onChange={(e) => setLength(Number(e.target.value))}
                            style={{
                                width: "60px",
                                marginLeft: "10px",
                                padding: "4px",
                                borderRadius: "6px",
                                border: "1px solid #ccc",
                            }}
                        />
                    </label>
                </div>

                {[
                    { label: "Include Lowercase", state: includeLower, setState: setIncludeLower },
                    { label: "Include Uppercase", state: includeUpper, setState: setIncludeUpper },
                    { label: "Include Numbers", state: includeNumbers, setState: setIncludeNumbers },
                    { label: "Include Symbols", state: includeSymbols, setState: setIncludeSymbols },
                ].map((opt, idx) => (
                    <div key={idx} style={{ marginBottom: "8px", textAlign: "left" }}>
                        <label>
                            <input
                                type="checkbox"
                                checked={opt.state}
                                onChange={() => opt.setState(!opt.state)}
                            />{" "}
                            {opt.label}
                        </label>
                    </div>
                ))}

                <button
                    onClick={generatePassword}
                    style={{
                        marginTop: "15px",
                        padding: "8px 15px",
                        background: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                    }}
                >
                    Generate Password
                </button>

                {password && (
                    <div
                        style={{
                            marginTop: "20px",
                            padding: "10px",
                            background: "#f0f0f0",
                            borderRadius: "6px",
                            wordBreak: "break-all",
                            fontWeight: "bold",
                        }}
                    >
                        {password}
                    </div>
                )}
            </div>
        </div>
    );
}

import React, { useRef, useState } from "react";

export default function PinAlwaysTop() {
    const toggleRef = useRef<HTMLInputElement>(null);
    const [isTopmost, setIsTopmost] = useState(false);

    function handleClick() {
        // Toggle the checkbox state
        const newState = !isTopmost;
        setIsTopmost(newState);

        // Communicate with Electron main process to set window "always on top"
        if (window.electronAPI && window.electronAPI.setTopmost) {
            window.electronAPI.setTopmost(newState);
        }
    }

    return (
        <div className="absolute right-0 top-0 p-3">
            <div className="flex items-center mb-4">
                <input
                    id="topmost-checkbox"
                    type="checkbox"
                    ref={toggleRef}
                    checked={isTopmost}
                    onChange={handleClick}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="topmost-checkbox" className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">
                    Keep Window on Top
                </label>
            </div>
        </div>
    );
}

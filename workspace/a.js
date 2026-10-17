// Test JavaScript file for workspace routing
console.log('Hello from workspace!');

function greet(name) {
    return `Hello, ${name}! This file is served from the workspace directory.`;
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { greet };
}

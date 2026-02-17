jumodule.exports = {
    // Session & Authentication
    SESSION_ID: process.env.Silva~H4sIAAAAAAAAA5VUy46jRhT9l9raGt7GILUUwNjG+G3jNkRZlKHAtHlWFWB71KvssositbJI5+PyBf0JEe7umVkkkw4SUr107rn3nHs/gyyPCbLRBaifQYHjGlLULumlQEAFehWGCIMuCCCFQAVoSfMquffPO0Umvbje67gv1LvqaMr+cLLgNGFC8kG9RYJ/Bx67oKgOSex/B1AWx9eoPhnBKi8MUuCczFxTsXTTXyUXnsBhctzONRJwxxawRYQxjrPILI4oRRgmNrosYYw/Rv/exrO954aznascyCjoM265t1dpr5YSz/LTShh5mrh0neSD9JcBPyh3s01kHLnZSZdqfFYcn/OproxNf+JkD4zONMRheeeVPomjDAVWgDIa08uH657O2UPTE52NUxdiohCzs9tPLHd54RppKSmMPbOUzWRy2bLix4i7B92p+5LdP2LbGWpyjmpxbW7HaD+dHacrL6qWTHC2tfnW/5b4Er975fR/6m7rYrAwj5tJteAdj8LOgOcTuD9UuZa6k4ttbdb3J3zfcdLVx+h7vdF4MjnV9jpl5FIS1r15IF9lb8/X846/V2JJYqalyO2ab+oOaYW/x7Lfa1a76VHWTh2erWksNXpPNPRq15MO/fK895V8arkOcxWoIJCwF7HDkFmcmxnX2Sv3UdMXiuLhmnjT/nKauqO5P94etObultEJXawAqNxjF2AUxYRiSOM8u50pUhfAoN4gHyN6Ky9YNTUtRy62mKVdJPJ5UOZkeHLZsj6GkUSIf7z2hpnOZ0P2DnRBgXMfEYKCcUxoji8zRAiMEAHqjz91QYbO9FW4NpzAd0EYY0KdrCqSHAbvqr5fQt/Pq4xuLplvtAuEgcp+PUaUxllE2jpWGcT+Ma6RcYSUADWECUFfMkQYBUCluEJfutbIg7bwi8VmtV6sNdAF6U2QOAAq4Pm+IkhsnxNkVRR/IJ+aFhUWxacMUdAFyesrWVIEUe7LPbnPi1z7sr3oggy2WODl+ennl+en31+en357eX765eX56df2/+uPP1sd3rJogwaIwjghQAXGJFNKW9TN5WDLzprRSDMjzYhafu9Zv9vnTR7I52ngu6jo+dtBookPwhXX3oE8GGxVHsIHL53k5GKxJrn7BxCggoZybmfK77nmXjS4ZaH727WmUDYdhKaFvazY7q+FOS81bAeWmZ4by5cCx10P3SisT4vkYkcZz8fSqC+I64h3PdeUB63XuiBAdeyjb4NN09rfn01vpbmd3s65lrvJYhysMcPqrLyJmc0wYjRE+g+ECcspz7DT7ZAd2fXstLYWNhS3Rkc2rq7pLbU06uRbhN3Fu7FvjZW8DbT4ZrlWz3Ybxug2H96U+S99X3m3LmQfu99AvA2cf2la3RnRcpLtR+MSZWYjrRaW0u/J/L1sNXRapoLIezGczuK5PgWPjz91QZFAGuY4BSqAWYDzm3twXrW2trIw/04wQ7eswSoy2sQTSKj2tVW2cYoIhWkBVE6WOYGTZUl6fbXEeTGG5AhUkKWCfmhtf9GKYkMhfW88oLWfYcjg8W+JxxLclAcAAA==|| '',
    PREFIX: process.env.PREFIX || '.',
    BOT_NAME: process.env.BOT_NAME || 'Silva MD',
    OWNER_NUMBER: process.env.+22893508137 || '',
    
    // Bot Settings
    BOT_MODE: process.env.BOT_MODE || 'public', // public, private
    DEBUG_MODE: process.env.DEBUG_MODE === 'true',
    AUTO_READ: process.env.AUTO_READ !== 'false',
    AUTO_TYPING: process.env.AUTO_TYPING === 'true',
    AUTO_REPLY: process.env.AUTO_REPLY === 'true',
    
    // Status Handler Settings
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== 'false',
    AUTO_STATUS_LIKE: process.env.AUTO_STATUS_LIKE !== 'false' || process.env.AUTO_STATUS_REACT !== 'false',
    AUTO_STATUS_VIEW: process.env.AUTO_STATUS_VIEW !== 'false' || process.env.AUTO_STATUS_SEEN !== 'false',
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT !== 'false',
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY === 'true',
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || '✅ Status viewed by Silva MD',
    STATUS_SAVER: process.env.STATUS_SAVER === 'true' || process.env.STATUS_Saver === 'true',
    STATUS_REPLY: process.env.STATUS_REPLY === 'true',
    STATUS_MSG: process.env.STATUS_MSG || 'SILVA MD 💖 SUCCESSFULLY VIEWED YOUR STATUS',
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || '❤️,🔥,💯,😍,👏',
    AUTO_REACT_NEWSLETTER: process.env.AUTO_REACT_NEWSLETTER === 'true',
    
    // Status Save Settings
    STATUS_SAVE_TO_OWNER: process.env.STATUS_SAVE_TO_OWNER === 'true',
    STATUS_SAVE_PATH: process.env.STATUS_SAVE_PATH || './status_saves',
    
    // Anti-call Settings
    ANTI_CALL: process.env.ANTI_CALL !== 'false',
    
    // Antidelete Settings
    ANTI_DELETE: process.env.ANTI_DELETE !== 'false' && process.env.ANTIDELETE !== 'false',
    ANTIDELETE: process.env.ANTI_DELETE !== 'false' && process.env.ANTIDELETE !== 'false',
    ANTI_DELETE_GROUP: process.env.ANTI_DELETE_GROUP !== 'false',
    ANTI_DELETE_PRIVATE: process.env.ANTI_DELETE_PRIVATE !== 'false',
    
    // Bot Owner Settings
    CONNECTED_NUMBER: process.env.CONNECTED_NUMBER || '',
    
    // Plugin Settings
    PLUGINS_DIR: process.env.PLUGINS_DIR || 'silvaxlab',
    
    // Allowed Users (for private mode)
    ALLOWED_USERS: process.env.ALLOWED_USERS ? 
        process.env.ALLOWED_USERS.split(',') : [],
    
    // Newsletter Settings
    NEWSLETTER_IDS: process.env.NEWSLETTER_IDS ? process.env.NEWSLETTER_IDS.split(',') : null,
    
    // Auto-update Settings
    AUTO_UPDATE: process.env.AUTO_UPDATE !== 'false',
    UPDATE_REPO: process.env.UPDATE_REPO || 'https://github.com/SilvaTechB/silva-md-bot',
    
    // Bot Info
    VERSION: '3.0.0',
    AUTHOR: 'Silva Tech Nexus',
    GITHUB: 'https://github.com/SilvaTechB/silva-md-bot',
    
    // Messages
    MESSAGES: {
        groupOnly: '⚠️ This command only works in groups.',
        adminOnly: '⚠️ This command requires admin privileges.',
        ownerOnly: '⚠️ This command is only for the bot owner.'
    }
};

module.exports = {
    // Session & Authentication
    SESSION_ID: process.env.Silva~H4sIAAAAAAAAA5VVy47iRhT9l9qCBj8AY6SWYmweBmMMmDYQzaKwy3aBX1SVHzDq1eyyiyK1skjn4/IF/QmR6e7pWSSTjiVL5arSuefec+71F5CkmKIZuoD+F5ARXECG6iW7ZAj0wSD3fURAE3iQQdAHi+lhdB/soDexWUi0XivEK20/teT8WLi72eHSSitSwFM4Su/AQxNk+SHC7g8AB964wkOVs6BfrG1nv4mmjryRg7K7YXDmrMQJo+USS0G5vAMPNSLEBCfBMAtRjAiMZuhiQUw+Rv804UOWarFRKsXEco/kSuz5DBUhPh82wuG+t59pLTPkRbH8GP1Q215Fum14Gm92A9M9rrMlLeSRIPEu5oOtlewaq4Fg9Pj2C32KgwR5uocShtnlw3WHc75whMpUYI8WhraGvHQdtnJrb7evUaRHZnxiA07eseiDdWcjvfIziTZQLNxfDb/SjXWAD92UjEeVYsWCbC1QcLC6w/J74hZ588rp/9R9rZjpKCRdbbE9QD61ZyOF57XlVRyvunPuVGmrUqX52Upi+jH6kumxRg/p46UkNYpJkZ0Mx545i8V6do7Cxr4qOp6/b+lZNX+nD1lOfsTSJP7svJ1Ul9W2snK1bYnFyhbGsaU5R6lT6WQ+3CXnSIHDSNp19FQfpoU2bi0XGyNwzmLnak1myj7wyoZ4QJtO0h6uRoPy7pbRCV10D/T5hyYgKMCUEchwmtR7bbEJoFeskUsQu1UXtEgrpV0t481NXhnJcZB3bH9WRQ6e3BvMvITbxca6V/zOprwDTZCR1EWUIm+CKUvJZY4ohQGioP/z5yZIUMVedKujiUIT+JhQtknyLEqh9ybq2yF03TRP2PqSuGq9QAT0ufdtxBhOAlqXMU8gcUNcIDWEjIK+DyOKviWICPJAn5EcfWtaNfXqunM6P5aMTQ80QXzTA3ugDwShJ4sdrseLUr8t/kQ/lTUqzLJPCWKgCaKXW1JHFttST+pKPaHN1zfrgyZIYI0Fnp8evz4/Pf7+/PT42/PT4y/PT4+/1u9ff/xZy/CaRR3UQwziiII+UKdH+TxrD4Y6dLh5OR4reqCogQLes35zz4s8SyiksefuUNZ1bS1S2kfxSor9gR5VLj8f/OM+nqb0onNDevcPIKAPzvrQqIKiDMKet+Q6IeUdWYfqlhfhtrgmrXvHGRKVD0/XiThQ9K7ZElAhFZO20ZN7BuOkdmFPB4EcIW8aN+Zne72Ub1ZrAg8V2EXfB+PcDoJc48TQab2sUndP6Wh7Eq+dC0zsq8M062JGhkqGSTlpNVTZHvF+pzPurhymeSZKXdvsWl6RHFt5JMh+K93hlbZ88fWtr6LXeYZvlqv1rD99jG7j4VWZ/9L3hXftQu6h+R3E67z5t//HZszO02Q7npxRMiw7y4Uu97qS4Eh6yYxzLLaFPYbGHJsDAzw8fG6CLILMT0lcT9XEI+nNPSTNa1vriZ/+IJg60HVtGah14hGkTHlvFRvHiDIYZ6DPSxIvcnJPlF9uWSTNJpCGoA+SWBwcattflCxbM8jeGg8o9aP5GDz8DSYC/3CTBwAA || '',
    PREFIX: process.env.PREFIX || '.',
    BOT_NAME: process.env.BOT_NAME || 'Silva MD',
    OWNER_NUMBER: process.env.22893508137 || '',
    
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

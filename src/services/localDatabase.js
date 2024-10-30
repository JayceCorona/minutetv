const LOCAL_STORAGE_KEY = 'minutetv_db';

export const localDB = {
  init() {
    if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
        users: {},
        wallets: {},
        auctions: [],
        transactions: []
      }));
    }
  },

  getUser(userId) {
    const db = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return db.users[userId];
  },

  updateWallet(userId, amount) {
    const db = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (!db.wallets[userId]) {
      db.wallets[userId] = { balance: 0 };
    }
    db.wallets[userId].balance += amount;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(db));
    return db.wallets[userId];
  },

  recordTransaction(userId, amount, type) {
    const db = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    db.transactions.push({
      userId,
      amount,
      type,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(db));
  }
}; 
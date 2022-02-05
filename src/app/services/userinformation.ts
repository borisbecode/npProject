export interface usermail {
  email?: string;
  accountType?: string;
  email_lower?: string;
  niveau?: number;
  nom?: string;
  password?: string; // what's this? don't store PW in your db
  prenom?: string;
}

export interface email {
  email?: string;
}

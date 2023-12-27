export interface TransactionType {
    id: string;
    accountId: string;
    transactionDate: string;
    participantId: string;
    category: string;
    type: string;
    notes: string;
    cleared: boolean;
    amount: number;
}

export interface ParticipantType {
    id: string;
    name: string;
    reference: string;
    address: string;
    city: string;
    stateProv: string;
    postalCode: string;
}

export interface AccountType {
    id: string;
    institutionId: string;
    reference: string;
    type: string;
    balance: number;
}

export interface InstitutionType {
    id: string;
    name: string;
    street: string;
    city: string;
    stateProv: string;
    postalCode: string;
    phone: string;
    logo: string;
    website: string;
}

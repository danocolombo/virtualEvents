export type CustomerType = {
    id: string;
    firstName: string;
    lastName: string;
};

export type OrderType = {
    id: string;
    customer: CustomerType;
    name: string;
};

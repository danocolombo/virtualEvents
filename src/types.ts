export interface TransactionType {
    transactionId: string;
    accountId: string;
    transactionDate: string;
    participant: string;
    participantId: string;
    category: string;
    transactionType: string;
    serial: string;
    description: string;
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
    accountId: string;
    institutionId: string;
    reference: string;
    accountType: string;
    balance: number;
}

export interface InstitutionType {
    institutionId: string;
    name: string;
    street: string;
    city: string;
    stateProv: string;
    postalCode: string;
    phone: string;
    logo: string;
    website: string;
}

export interface UserType {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    id: string;
}

export interface BillType {
    billId: string;
    participantId: string;
    date: string;
    category: string;
    amount: number;
}
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
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    Modal: undefined;
    Users: undefined;
    NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
    TabOne: undefined;
    TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<RootTabParamList, Screen>,
        NativeStackScreenProps<RootStackParamList>
    >;

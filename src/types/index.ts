export type RootStackParamList = {
    home: undefined
    list: undefined
    description: { itemDetails: ItemDetails }
}

export interface ItemDetails {
    brand: string
    image: string
    productName: string
    price: number
    productId: number
}

export interface ListDetails {
    uiState: UIState
    data: ItemDetails[]
}

export enum UIState {
    LOADING,
    FINISHED,
    ERROR,
}

export interface FetchState<TData> {
    data: TData | null,
    loading: boolean,
    errorMessage: string | null
}

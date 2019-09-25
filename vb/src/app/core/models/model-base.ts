function isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
}

export abstract class ModelBase<T> {
    id: number = null;
    enabled: boolean = null;
    created: Date = null;
    updated: Date = null;

    setValues(values: T): void {
        if (isNullOrUndefined(values)) {
            return;
        }
        for (const key of Object.keys(values)) {
            const value = values[key];
            if (!isNullOrUndefined(value) && this.hasOwnProperty(key)) {
                this[key] = value;
            }
        }
    }
}

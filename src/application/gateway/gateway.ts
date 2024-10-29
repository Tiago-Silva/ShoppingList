

export interface Gateway<T> {
    save(object: T): Promise<void>;
    update(object: T): Promise<void>;
    delete(object: T): Promise<void>;
    getByName(name: string): Promise<T>;
}

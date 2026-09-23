
    export type RemoteKeys = 'listings';
    type PackageType<T> = T extends 'listings' ? typeof import('listings') :any;
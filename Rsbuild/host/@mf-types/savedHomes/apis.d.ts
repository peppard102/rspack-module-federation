
    export type RemoteKeys = 'savedHomes';
    type PackageType<T> = T extends 'savedHomes' ? typeof import('savedHomes') :any;

    export type RemoteKeys = 'dashboard';
    type PackageType<T> = T extends 'dashboard' ? typeof import('dashboard') :any;
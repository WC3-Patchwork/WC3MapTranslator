enum ImportType {
    Standard = 'standard',
    Custom = 'custom'
}

interface Import {
    path: string;
    type: ImportType;
}

export { Import, ImportType }
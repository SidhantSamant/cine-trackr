import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from './useLibrary';

import { LibraryFilters, libraryService } from '@/utils/libraryService';
import { mapLibraryToTmdb } from '@/utils/mappers';

export const useLibraryLists = (
    userId: string | undefined,
    filters: LibraryFilters,
    limit?: number,
) => {
    return useQuery({
        queryKey: [QUERY_KEYS.library, userId, filters],
        queryFn: async () => {
            const data = await libraryService.getLibrary(filters, 1, limit);
            return data.map(mapLibraryToTmdb);
        },
        placeholderData: keepPreviousData,
        enabled: !!userId,
    });
};

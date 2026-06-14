import { ScrollView } from 'react-native';

import LibraryListSection from '@/components/LibraryListSection';

export default function CollectionScreen() {
    return (
        <ScrollView className="gap-2 px-3" showsVerticalScrollIndicator={false}>
            <LibraryListSection
                title="Continue Watching"
                status="watching"
                emptyMessage="Start watching something!"
                showMovieTab={false}
            />

            <LibraryListSection
                title="Your Watchlist"
                status="watchlist"
                emptyMessage="No items in your watchlist"
            />

            <LibraryListSection title="Your Favorites" isFavorite emptyMessage="No favorites yet" />

            <LibraryListSection
                title="Completed"
                status="completed"
                emptyMessage="No items completed yet"
            />
        </ScrollView>
    );
}

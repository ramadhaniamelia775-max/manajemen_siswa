import { Suspense } from 'react';

type KelasDetailPageProps = {
    params: Promise<{ id: string }>;
};

async function KelasDetail({ params }: KelasDetailPageProps) {
    const { id } = await params;

    return (
        <div>
            <h1>WELCOME TO KELAS</h1>
            <p>Welcome to the kelas page with ID: {id}!</p>
        </div>
    );
}

export default function KelasDetailPage({ params }: KelasDetailPageProps) {
    return (
        <Suspense fallback={<p>Memuat kelas...</p>}>
            <KelasDetail params={params} />
        </Suspense>
    );
}
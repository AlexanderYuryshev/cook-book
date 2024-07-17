import {Loader} from '@/lib/gravity';

export default function Loading() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Loader />
        </div>
    );
}

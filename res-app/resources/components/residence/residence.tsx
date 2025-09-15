import { ResidenceIntreface } from '@/types';
import { CirclePlus } from 'lucide-react';
import Card from '../card';
import { ResidenceList } from './residence_list';
interface ResidenceListProps {
    residences: ResidenceIntreface[];
    id: number;
}
export function Residence({
    residences,
}: ResidenceListProps): React.ReactElement {
    return (
        <>
            <Card className='py-4'>
                <div className="flex items-center justify-between ps-4 align-middle">
                    <h2 className="semi-bold text-fourth">
                        Residences
                    </h2>
                    {/* <button className="right-0 m-2 cursor-pointer rounded-lg bg-fourth p-1 text-second">
                        <CirclePlus size={20} />
                    </button> */}
                </div>
                <ResidenceList residences={residences} />
            </Card>
        </>
    );
}

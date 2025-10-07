import { ResidenceIntreface, User } from '@/js/types';
import { CirclePlus } from 'lucide-react';
import Card from '../../../components/card';
import ModalDialog from '../../../components/dialog/modal_dialog';
import ModalDialogCitizen from '../../../components/residence/modal_dialog_citizen';
import TableCitizens from '../../../components/table_citizens';
import DashboardLayout from '../../../layouts/dashboard_layout';
interface ResidencePagePropsInterface {
    residence: ResidenceIntreface;
    citizens: User[];
}
export default function Residence({
    residence,
    citizens,
}: ResidencePagePropsInterface): React.ReactElement {
    const {
        city,
        way,
        country,
        number,
        street,
        postal_code,
    } = residence;

    return (
        <DashboardLayout>
            <section className="grid md:p-6">
                <Card className="px-4 py-2">
                    <p className="text-fourth">
                        {number} {way} {street} {city}
                        {', '}
                        <b>
                            {postal_code} {country}
                        </b>
                    </p>
                </Card>
                <Card className="my-4 p-6">
                    <div className="mb-2 flex items-center justify-end text-fourth">
                        Ajouter un résident{' '}
                        <button className="right-0 m-2 cursor-pointer rounded-lg bg-fourth p-1 text-second">
                            <CirclePlus size={20} />
                        </button>
                    </div>
                    {citizens.length > 0 ? (
                        <TableCitizens rows={citizens} />
                    ) : null}
                </Card>
            </section>
            <ModalDialog
                open={true}
                setOpen={() => alert('test')}
                submitFn={() => alert('test')}
            >
                <ModalDialogCitizen />
            </ModalDialog>
        </DashboardLayout>
    );
}

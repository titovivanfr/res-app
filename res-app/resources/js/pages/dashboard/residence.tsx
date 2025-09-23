import { ResidenceIntreface, User } from '@/types';
import Card from '../../../components/card';
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
    console.log(
        city,
        way,
        country,
        number,
        street,
        postal_code,
    );
    console.log(citizens);

    return (
        <DashboardLayout>
            <section className="grid md:p-6">
                <Card className="px-4 py-2">
                    <p>
                        {number} {way} {street} {city}
                        {', '}
                        <b>
                            {postal_code} {country}
                        </b>
                    </p>
                </Card>
            </section>
        </DashboardLayout>
    );
}

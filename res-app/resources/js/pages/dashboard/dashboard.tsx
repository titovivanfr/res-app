import { Greeting } from '@/js/tools/greeting';
import { ResidenceIntreface, User } from '@/js/types';
import { Residence } from '../../../components/residence/residence';
import DashboardLayout from '../../../layouts/dashboard_layout';
interface DashboardProps {
    user: User;
    residences: ResidenceIntreface[];
}
export default function Dashboard({
    user,
    residences,
}: DashboardProps): React.ReactElement {
    const { first_name, last_name, using_name, id } = user;
    const fn: string = Greeting({
        first_name,
        last_name,
        using_name,
    });

    return (
        <DashboardLayout>
            <section className="grid md:p-6">
                <article className="mb-2 px-2">
                    <h1 className="font-bold text-fourth">
                        Bonjour, {fn}
                    </h1>
                </article>
                <Residence
                    residences={residences}
                />
            </section>
        </DashboardLayout>
    );
}

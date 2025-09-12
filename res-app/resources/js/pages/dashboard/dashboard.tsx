import { Greeting } from '@/tools/greeting';
import { Auth } from '@/types';
import Card from '../../../components/card';
import DashboardLayout from '../../../layouts/dashboard_layout';

export default function Dashboard({
    user,
}: Auth): React.ReactElement {
    const { first_name, last_name, using_name } = user;
    const fn: string = Greeting({
        first_name,
        last_name,
        using_name,
    });
    console.log(user);

    return (
        <DashboardLayout>
            <section className="grid md:p-6">
                <article className="mb-2 px-2">
                    <h1 className="font-bold">
                        Bonjour, {fn}
                    </h1>
                </article>
                <Card>
                    <p>dashboard</p>
                </Card>
            </section>
        </DashboardLayout>
    );
}

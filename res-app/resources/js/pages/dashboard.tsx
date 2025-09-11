import Card from '../../components/card';
import { DashboardNav } from '../../components/dashboard_nav';
import Layout from '../../layouts/layout';
export default function Dashboard(): React.ReactElement {
    return (
        <Layout>
            <DashboardNav />
            <section className="grid md:p-6">
                <Card>
                    <p>dashboard</p>
                </Card>
            </section>
        </Layout>
    );
}

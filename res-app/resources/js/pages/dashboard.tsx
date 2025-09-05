import { DashboardNav } from '../../components/dashboard_nav';
import Layout from '../../layouts/layout';
export default function Dashboard(): React.ReactElement {
    return (
        <Layout>
            <DashboardNav />
            <section className="">
                <p>dashoboard</p>
            </section>
        </Layout>
    );
}

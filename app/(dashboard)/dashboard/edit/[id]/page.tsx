import AddPropertyForm from "@/components/shared/forms/add-property-form";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function EditPropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const property = await prisma.property.findFirst({
    where: { id },
  });

  if (!property) return notFound();

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Edit Property</h2>
      <AddPropertyForm initialData={property} />
    </div>
  );
}

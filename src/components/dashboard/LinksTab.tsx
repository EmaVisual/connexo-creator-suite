import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, GripVertical, Trash2, ExternalLink } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import IconPicker from "./IconPicker";

interface Link {
  id: string;
  title: string;
  url: string;
  icon: string;
  isActive: boolean;
}

const LinksTab = () => {
  const [links, setLinks] = useState<Link[]>([
    { id: "1", title: "Instagram", url: "https://instagram.com", icon: "instagram", isActive: true },
    { id: "2", title: "Website", url: "https://example.com", icon: "globe", isActive: true },
  ]);

  const [contactData, setContactData] = useState({
    email: "",
    phone: "",
    location: "",
  });

  const addLink = () => {
    const newLink: Link = {
      id: Date.now().toString(),
      title: "",
      url: "",
      icon: "link",
      isActive: true,
    };
    setLinks([...links, newLink]);
  };

  const updateLink = (id: string, field: keyof Link, value: string | boolean) => {
    setLinks(links.map(link => link.id === id ? { ...link, [field]: value } : link));
  };

  const deleteLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Connexo User
EMAIL:${contactData.email}
TEL:${contactData.phone}
ADR:;;${contactData.location};;;;
END:VCARD`;
    
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contact.vcf';
    a.click();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Contact Data Section */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Add your contact details to appear on your profile</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={contactData.email}
                onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 234 567 8900"
                value={contactData.phone}
                onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="Caracas, Venezuela"
              value={contactData.location}
              onChange={(e) => setContactData({ ...contactData, location: e.target.value })}
            />
          </div>
          <Button onClick={downloadVCard} variant="secondary">
            Download vCard
          </Button>
        </CardContent>
      </Card>

      {/* Links Section */}
      <Card>
        <CardHeader>
          <CardTitle>Your Links</CardTitle>
          <CardDescription>Add and manage your profile links</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {links.map((link) => (
            <div key={link.id} className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
              <div className="cursor-move mt-3">
                <GripVertical className="h-5 w-5 text-muted-foreground" />
              </div>
              
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2">
                  <IconPicker
                    value={link.icon}
                    onChange={(icon) => updateLink(link.id, "icon", icon)}
                  />
                  <Input
                    placeholder="Link Title"
                    value={link.title}
                    onChange={(e) => updateLink(link.id, "title", e.target.value)}
                  />
                </div>
                <Input
                  placeholder="https://..."
                  value={link.url}
                  onChange={(e) => updateLink(link.id, "url", e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2 mt-3">
                <Switch
                  checked={link.isActive}
                  onCheckedChange={(checked) => updateLink(link.id, "isActive", checked)}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteLink(link.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}

          <Button onClick={addLink} className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Link
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LinksTab;
